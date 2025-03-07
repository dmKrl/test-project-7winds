import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import GlobalStyle from 'app/styles/GlobalStyle.styles';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'features/store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
    <Provider store={store}>
        <HashRouter>
            <GlobalStyle />
            <App />
        </HashRouter>
    </Provider>,
);
