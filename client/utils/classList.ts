interface IStyleObject {
  readonly [key: string]: string;
}

interface IOptions {
  readonly [key: string]: boolean;
}

const classListCreator =
  (styleObject: IStyleObject) =>
  (classNames: string[], options: IOptions = {}) =>
    classNames.reduce((list, className) => {
      let output = list;
      const isValid = options[className] ?? true;
      if (!isValid) return output;

      if (styleObject[className]) {
        if (output) output += ' ';
        output += styleObject[className];
      }
      return output;
    }, '');

export default classListCreator;
