import { Component } from '@angular/core';

@Component({
  selector: 'ngx-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent {

  stages = {
    test: { status: 'Pending', completed: false },
    build: { status: 'Pending', completed: false },
    deploy: { status: 'Pending', completed: false },
    monitor: { status: 'Pending', completed: false }
  };

  steps = {
    Junit: { status: 'Pending', completed: false },
    dockerhub: { status: 'Pending', completed: false },
    docker: { status: 'Pending', completed: false },
    kubernetes: { status: 'Pending', completed: false },
    prometheus: { status: 'Pending', completed: false },
    grafana: { status: 'Pending', completed: false }
  };

  toggleStage(stage: string) {
    this.steps[stage].completed = !this.stages[stage].completed;
    this.steps[stage].status = this.stages[stage].completed ? 'Completed' : 'Pending';



      
      

  }

  togglejunit() {

    this.steps.Junit.completed = !this.steps.Junit.completed;
    this.steps.Junit.status = this.steps.Junit.completed ? 'Completed' : 'Pending';



    if (this.steps.Junit.completed == true ){

      this.stages.test.completed = true;
      this.stages.test.status = 'completed';


    }else if (this.steps.Junit.completed == false){
      this.stages.test.completed = false;
      this.stages.test.status = 'Pending';

      this.stages.build.completed = false;
      this.stages.build.status = 'Pending';

      this.stages.deploy.completed = false;
      this.stages.deploy.status = 'Pending';

      this.stages.monitor.completed = false;
      this.stages.monitor.status = 'Pending';

    }


    


  }
  

  toggledockerhub() {

    this.steps.dockerhub.completed = !this.steps.dockerhub.completed;
    this.steps.dockerhub.status = this.steps.dockerhub.completed ? 'Completed' : 'Pending';



    if (this.steps.Junit.completed == true && this.steps.dockerhub.completed == true ){

      this.stages.test.completed = true;
      this.stages.test.status = 'completed';
      this.stages.build.completed = true;
      this.stages.build.status = 'completed';


    }else if (this.steps.Junit.completed == true && this.steps.dockerhub.completed == false ){

      this.stages.test.completed = true;
      this.stages.test.status = 'completed';

      this.stages.build.completed = false;
      this.stages.build.status = 'Pending';

      this.stages.deploy.completed = false;
      this.stages.deploy.status = 'Pending';

      this.stages.monitor.completed = false;
      this.stages.monitor.status = 'Pending';




    }
}


toggledocker() {

  this.steps.docker.completed = !this.steps.docker.completed;
  this.steps.docker.status = this.steps.docker.completed ? 'Completed' : 'Pending';



  if ( this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && this.steps.docker.completed == true && this.steps.kubernetes.completed == true   ){

    this.stages.test.completed = true;
    this.stages.test.status = 'completed';

    this.stages.build.completed = true;
    this.stages.build.status = 'completed';

    this.stages.deploy.completed = true;
    this.stages.deploy.status = 'completed';




  }else if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && (this.steps.docker.completed == false || this.steps.kubernetes.completed == false)){

    this.stages.test.completed = true;
    this.stages.test.status = 'completed';

    this.stages.build.completed = true;
    this.stages.build.status = 'completed';

    this.stages.deploy.completed = false;
    this.stages.deploy.status = 'Pending';

    this.stages.monitor.completed = false;
    this.stages.monitor.status = 'Pending';



  }
}

togglekubernetes() {

  this.steps.kubernetes.completed = !this.steps.kubernetes.completed;
  this.steps.kubernetes.status = this.steps.kubernetes.completed ? 'Completed' : 'Pending';



  if ( this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && this.steps.docker.completed == true && this.steps.kubernetes.completed == true   ){

    this.stages.test.completed = true;
    this.stages.test.status = 'completed';

    this.stages.build.completed = true;
    this.stages.build.status = 'completed';

    this.stages.deploy.completed = true;
    this.stages.deploy.status = 'completed';




  }else if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && (this.steps.docker.completed == false || this.steps.kubernetes.completed == false)){

    this.stages.test.completed = true;
    this.stages.test.status = 'completed';

    this.stages.build.completed = true;
    this.stages.build.status = 'completed';

    this.stages.deploy.completed = false;
    this.stages.deploy.status = 'Pending';

    this.stages.monitor.completed = false;
    this.stages.monitor.status = 'Pending';



  }
}


toggleprometheus() {

  this.steps.prometheus.completed = !this.steps.prometheus.completed;
  this.steps.prometheus.status = this.steps.prometheus.completed ? 'Completed' : 'Pending';



  if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true
     && this.steps.docker.completed == true && this.steps.kubernetes.completed == true
    && this.steps.prometheus.completed == true && this.steps.grafana.completed == true ){

      this.stages.test.completed = true;
      this.stages.test.status = 'completed';

      this.stages.build.completed = true;
      this.stages.build.status = 'completed';

      this.stages.deploy.completed = true;
      this.stages.deploy.status = 'completed';

      this.stages.monitor.completed = true;
      this.stages.monitor.status = 'completed';





  }else if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && (this.steps.docker.completed == true || this.steps.kubernetes.completed == true)
    && (this.steps.prometheus.completed == false || this.steps.grafana.completed == false)){


      this.stages.test.completed = true;
      this.stages.test.status = 'completed';

      this.stages.build.completed = true;
      this.stages.build.status = 'completed';

      this.stages.deploy.completed = true;
      this.stages.deploy.status = 'completed';

      this.stages.monitor.completed = false;
      this.stages.monitor.status = 'Pending';



  }

}


togglegrafana() {

  this.steps.grafana.completed = !this.steps.grafana.completed;
  this.steps.grafana.status = this.steps.grafana.completed ? 'Completed' : 'Pending';



  if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true
     && this.steps.docker.completed == true && this.steps.kubernetes.completed == true
    && this.steps.prometheus.completed == true && this.steps.grafana.completed ){

      this.stages.test.completed = true;
      this.stages.test.status = 'completed';

      this.stages.build.completed = true;
      this.stages.build.status = 'completed';

      this.stages.deploy.completed = true;
      this.stages.deploy.status = 'completed';

      this.stages.monitor.completed = true;
      this.stages.monitor.status = 'completed';





  }else if (this.steps.Junit.completed == true 
    && this.steps.dockerhub.completed == true 
    && (this.steps.docker.completed == true || this.steps.kubernetes.completed == true)
    && (this.steps.prometheus.completed == false || this.steps.grafana.completed == false)){


      this.stages.test.completed = true;
      this.stages.test.status = 'completed';

      this.stages.build.completed = true;
      this.stages.build.status = 'completed';

      this.stages.deploy.completed = true;
      this.stages.deploy.status = 'completed';

      this.stages.monitor.completed = false;
      this.stages.monitor.status = 'Pending';



  }

}


}