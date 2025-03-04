// styled.d.ts
import 'styled-components';

import { ITheme } from 'shared/styles/styled';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme { }
}
