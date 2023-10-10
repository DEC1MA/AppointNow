
import Storage from './storage';

class Drivers {
  public static async initalize() {
    await Storage.initialize();
  }
}

export default Drivers;
