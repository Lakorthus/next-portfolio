import { IAboutFile } from './AboutFile';

const base: IAboutFile = {
  title: 'About File',
  listItems: ['resusable-component'],
  yellow: true,
  handleDoubleClick(format) {
    console.log('Double clicked on file', format);
  },
};

export const mockAboutFileProps = {
  base,
};
