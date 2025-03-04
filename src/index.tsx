import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { setupStore } from 'features/store/store';
import { App } from 'app/App';

const container = document.getElementById('root')!;
const root = createRoot(container);

// const store = setupStore();

root.render(
    <App />,
);
