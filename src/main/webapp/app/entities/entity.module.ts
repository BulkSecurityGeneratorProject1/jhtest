import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhtestRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhtestCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhtestLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhtestDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhtestTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhtestEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhtestJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhtestJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhtestEntityModule {}
