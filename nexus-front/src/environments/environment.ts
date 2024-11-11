export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  socialAuth: {
    facebook: {
      appId: 'your-facebook-app-id'
    },
    twitter: {
      apiKey: 'your-twitter-api-key'
    },
    linkedin: {
      clientId: 'your-linkedin-client-id'
    }
  },
  firebase: {
    apiKey: 'your-firebase-api-key',
    authDomain: 'your-auth-domain',
    projectId: 'your-project-id',
    storageBucket: 'your-storage-bucket',
    messagingSenderId: 'your-messaging-sender-id',
    appId: 'your-app-id'
  }
};
