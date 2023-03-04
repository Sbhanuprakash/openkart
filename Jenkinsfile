#! groovy 

pipeline {
           agent any

stages {


         stage('CheckOutGit'){

            steps{
                echo "Cloning the openkart project from github to container"
                checkout scm
                echo " sucessfully cloned the openkart project" 
                sh "ls -lrth"
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

          stage('Docker Build'){
              steps{
                script{
                    def customImage = docker.build("sbhanuprakash/openkart_jenkins:${env.BUILD_ID}")
                    echo "pushing the image************"

                    withCredentials([usernamePassword(credentialsId:'Dockerid', passwordVariable:'DockeridPassword',usernameVariable:'DockeridUser' )])
                    {
                       sh "docker login -u ${env.DockeridUser} -p ${env.DockeridPassword} "
                       sh "docker push sbhanuprakash/openkart_jenkins:${env.BUILD_ID}"
                    }




                }







              }   
 






          }




}







}