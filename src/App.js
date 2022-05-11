import { ApolloProviderFactory, OAuthProvider } from '@webonyx/react-apollo';
import { EnsureAuthenticated } from '@webonyx/react-auth';
import Main from './components/Main';

function App() {
  return (
      <ApolloProviderFactory>
        <OAuthProvider>
            <EnsureAuthenticated>
                <Main/>
            </EnsureAuthenticated>
        </OAuthProvider>
      </ApolloProviderFactory>
  );
}

export default App;
