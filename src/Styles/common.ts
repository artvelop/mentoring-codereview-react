import { css } from 'styled-components';

export const GridCenterCSS = css`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const ColumnNumberCSS = (count: number) => css`
  grid-template-columns: repeat(${count}, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
`;
export const FlexColumnCSS = css`
  display: flex;
  flex-direction: column;
`;
export const FlexCenterCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBetweenCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexAlignCSS = css`
  display: flex;
  align-items: center;
`;

export const WidthAutoCSS = css`
  width: 25%;
  margin: 0 auto;
`;
