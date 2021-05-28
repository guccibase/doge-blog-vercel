import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import ArticlesScreen from "./screens/Articles_screen";
import "./App.css";
import BlogScreen from "./screens/Blog-screen";
import Profile from "./screens/Profile";
import NewArticleScreen from "./screens/New_article_screen";

function App() {
  return (
    <Container
      className="align-items-center justify-content-center"
      style={{ minHeight: "1000vh" }}
    >
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={ArticlesScreen} />
            <Route path="/update-profile" component={UpdateProfile} />
            <Route path="/profile" component={Profile} />
            <Route path="/new" component={NewArticleScreen} />
            <Route path="/blog/:id" component={BlogScreen} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
