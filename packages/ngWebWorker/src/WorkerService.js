/**
 * Created by htomaka on 13/09/17.
 */


function WorkerService ( $q ) {
    let workerPath = '';
    let worker = new Worker (workerPath);
    let defer = $q.defer ();

    function setWorkerPath ( path ) {
        workerPath = path;
    }

    worker.addEventListener ('message', function ( e ) {
        defer.resolve (e.data);
    }, false);
    return {
        processData: function ( data ) {
            defer = $q.defer ();
            worker.postMessage ({
                'myData': data
            });
            return defer.promise;
        }
    };
}

WorkerService.$inject = ['$q'];
export default WorkerService;
