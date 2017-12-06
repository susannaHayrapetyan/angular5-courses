import { TestAngularCoursesPage } from './app.po';

describe('test-angular-courses App', function() {
  let page: TestAngularCoursesPage;

  beforeEach(() => {
    page = new TestAngularCoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
