import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styles';

export function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
        </BrowserRouter>
    );
}
