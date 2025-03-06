import styled, { css } from 'styled-components';

export const ListFormContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 0px 10px;
    height: 41px;
`;

const InputUI = css`
    border-radius: 6px;
    border: 1px solid #414144;
    background: rgba(0, 0, 0, 0.00);
    height: 36px;
    color: white;
    :focus {
        outline: none;
        border: none;
    }
`;

export const InputNameWork = styled.input`
    ${InputUI};
    min-width: 44.313rem;
`;

export const InputSalary = styled.input`
    ${InputUI};
    width: 12.5rem;
`;

export const InputDevices = styled.input`
    ${InputUI};
    width: 12.5rem;
`;

export const InputOverheads = styled.input`
    ${InputUI};
    width: 12.5rem;
`;

export const InputProfit = styled.input`
    ${InputUI};
    width: 12.5rem;
`;
