import { Route, Switch } from 'react-router-dom';
import { CoursesSingle } from './courses-single/courses-single.component';
import { Courses } from './courses/courses.component';

export const CoursesRoutes = () => {
  return <Switch>
    <Route path='/courses' exact component={Courses} />
    <Route path='/courses/:id' component={CoursesSingle} />
  </Switch>
}
