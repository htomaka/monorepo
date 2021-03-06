/**
 * Created by htomaka on 13/09/17.
 */


function WorkerService ( $q ) {
    let workerPath = '';
    let worker = new Worker (workerPath);
    let defer = $q.defer ();

    function setWorkerPath ( path ) {
        console.log('set path', path);
        workerPath = path;
    }

    function processData ( data ) {
        console.log('processData', data);
        defer = $q.defer ();
        worker.postMessage ({
            'myData': data
        });
        return defer.promise;
    }

    worker.addEventListener ('message', function ( e ) {
        console.log('worker message', e);
        defer.resolve (e.data);
    }, false);

    return {
        processData: processData,
        setWorkerPath: setWorkerPath
    };
}

WorkerService.$inject = ['$q'];
export default WorkerService;
