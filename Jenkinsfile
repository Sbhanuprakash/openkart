#! groovy 

pipeline {
           agent any

stages {


         stage('CheckOutGit'){

            steps{
                echo "Cloning the openkart project from github to container"
                checkout scm
                echo " sucessfully cloned the openkart project" 
                sh "ls - lrth"
            }
         }
         
          stage('DockerSetup'){
            steps{
                script{
                     def dockerHome = tool 'MyDocker'
                     echo ">>>>>>>${dockerHome}"
                     env.PATH = "${dockerHome}/bin:${env.PATH}"



                }



            }




          }
          stage('Docker Check'){
                  steps{
                        
                      script{
                          echo "checking docker ..............."
                          sh "docker --version"
                          sh "whoami"


                      }  



                  }




          }






}







}