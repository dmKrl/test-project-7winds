import { Header } from 'widgets/Header/ui/Header';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/RouterProvider/ui/RouterProvider';
import { AppContainer, ContentPage, PageWrapper } from './styles/App.styles';

export function App() {
    return (
        <AppContainer>
            <Header />
            <ContentPage>
                <Sidebar />
                <PageWrapper>
                    <AppRouter />
                </PageWrapper>
            </ContentPage>
        </AppContainer>
    );
}
