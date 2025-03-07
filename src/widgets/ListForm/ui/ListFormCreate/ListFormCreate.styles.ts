import styled, { css } from 'styled-components';

interface InputCreateProps {
    isEdit?: boolean;
}

export const ListFormContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 0px 10px;
    height: 41px;
`;

const InputUI = css<InputCreateProps>`
    border-radius: 6px;
    border: 1px solid #414144;
    background: rgba(0, 0, 0, 0.00);
    height: 36px;
    color: white;
    padding: 0px 10px;
    :focus {
        outline: none;
        border: none;
    }
`;

export const InputCreateNameWork = styled.input<InputCreateProps>`
    ${InputUI};
    min-width: 44.313rem;
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
