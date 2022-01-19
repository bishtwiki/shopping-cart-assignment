import React from 'react'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import { AllRoutes } from './Routes';
import {auth,createUserProfileDocument} from './firebase.util'
import { connect } from 'react-redux'
import {setCurrentUser} from './Redux/user/user.action'



class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render()
  {
    return (
      <>
        <ErrorBoundary>
          <Header/>
          <AllRoutes />
          <Footer />
        </ErrorBoundary>
      </>
    );
  }
 
}


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user)=> dispatch(setCurrentUser(user))
});

export default connect (mapStateToProps,mapDispatchToProps)(App) ;
