class Auth {
  public static login(username: string, password: string) {
    // Call the api to login
    console.log(`User wants to login with username ${username} and password ${password}`);
  }

  public static register(username: string, password: string) {
    // Call the api to register
    console.log(`User wants to register with username ${username} and password ${password}`);
  }
}

export default Auth;