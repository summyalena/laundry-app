import {createContext, useEffect} from 'react'
import {useState} from 'react'
import netlifyIdentity from 'netlify-identity-widget'
const AuthContext = createContext({
    // we create default values samples and they would change along the way;
    user:null,
    login: ()=>{},
    logout:()=>{},
    authReady:false
})

// we create AuthContextProvider to wrap the data values and keep track of the values and pass it to the authContextProvider
export const AuthContextProvider =({children})=>{
    const [user,setUser] = useState(null);

    useEffect(()=>{
        // we initialize the netlify identity
           netlifyIdentity.init('login', (user)=>{
             setUser(user)
            netlifyIdentity.close()
            console.log('login')
           })
           
    })
    const login = ()=>{
         netlifyIdentity.open();
    }

    const context = {user:user, login:login}
    // this here wraps the children and the children are the appjs and mainnav page that it provides data values to.
    // so the children have access to the value passed to the authContextProvider tag
    return(
    <AuthContext.Provider value={context}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;