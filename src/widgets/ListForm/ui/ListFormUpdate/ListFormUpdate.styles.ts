import styled, { css } from 'styled-components';

interface InputPropsUpdate {
    isEdit?: boolean;
}

export const ListFormContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 0px 10px;
    height: 41px;
`;

const InputUI = css<InputPropsUpdate>`
    border-radius: 6px;
    border: none;
    background: rgba(0, 0, 0, 0.00);
    height: 36px;
    cursor: default;
    color: white;
    padding: 0px 10px;
    ${(props) => props.isEdit && css`
            border: 1px solid #414144;
            cursor: text;
        `}
    :focus {
        outline: none;
        border: none;
    }
`;

export const InputUpdateNameWork = styled.input<InputPropsUpdate>`
    ${InputUI};
    min-width: 44.313rem;
`;

export const InputUpdateSalary = styled.input<InputPropsUpdate>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputUpdateDevices = styled.input<InputPropsUpdate>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputUpdateOverheads = styled.input<InputPropsUpdate>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputUpdateProfit = styled.input<InputPropsUpdate>`
    ${InputUI};
    width: 12.5rem;
`;
