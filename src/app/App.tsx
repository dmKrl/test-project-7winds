import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle.styles';
import { AppContainer } from './styles/App.styles';
import { Header } from 'widgets/Header/Header';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

export function App() {
    return (
        <AppContainer>
            <Header />
            <div>
                <Sidebar/>
                <div>
                    
                </div>
            </div>
        </AppContainer>

    );
}
