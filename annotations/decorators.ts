class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops an error ocurred!!!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish!');
    } else {
      console.log('nothing ');
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
