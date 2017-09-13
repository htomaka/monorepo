import angular from 'angular';
import WorkerService from './WorkerService';

export default angular.module('ngWebWorker', [])
.factory('WorkerService', WorkerService)
.name