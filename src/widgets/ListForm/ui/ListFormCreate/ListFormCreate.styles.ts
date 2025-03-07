import styled, { css } from 'styled-components';

interface InputCreateProps {
    isEdit?: boolean;
}

export const ListFormContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 4px 10px 0px;
    height: 41px;
`;

const InputUI = css<InputCreateProps>`
    border-radius: 6px;
    border: 1px solid #414144;
    background: rgba(0, 0, 0, 0.00);
    color: white;
    padding: 0px 10px;
    text-align: center;
    :focus {
        outline: none;
        border: none;
    }
`;

export const InputCreateNameWork = styled.input<InputCreateProps>`
    ${InputUI};
    width: 100%;
`;

export const InputCreateSalary = styled.input<InputCreateProps>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputCreateDevices = styled.input<InputCreateProps>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputCreateOverheads = styled.input<InputCreateProps>`
    ${InputUI};
    width: 12.5rem;
`;

export const InputCreateProfit = styled.input<InputCreateProps>`
    ${InputUI};
    width: 12.5rem;
`;
