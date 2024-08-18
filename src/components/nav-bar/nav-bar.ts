import { resolve, valueConverter } from 'aurelia';
import { INavigationModel, IRouteContext } from '@aurelia/router-lite';


@valueConverter('firstNonEmpty')
class FirstNonEmpty {
  public toView(paths: string[]): string {
    for (const path of paths) {
      if (path) return path;
    }
  }
}

export class NavBar {
  public static dependencies = [FirstNonEmpty];
  private readonly navModel: INavigationModel = resolve(IRouteContext).navigationModel;

  public async binding() {
    await this.navModel.resolve()
  }
}