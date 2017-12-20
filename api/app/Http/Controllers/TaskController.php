<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Models\Task;

class TaskController extends Controller {

    public function task_single($id) {
        $task = Task::find($id);
        return response(json_encode($task), 200);
    }

    public function task_update(Request $request, $id) {
        $input = $request->all();
        $task = Task::find($id);

        foreach($input as $key => $val) {
            $task->$key = $val;
        }

        $task->save();

        return response(json_encode($task), 200);
    }

    public function task_create(Request $request) {
        $input = $request->all();

        $formatted = [
            'user_id' => 1,
            'list_id' => $input['listId'],
            'assign_to' => 0,
            'title' => $input['title'],
            'slug' => str_slug($input['title'], '-')
        ];
        $task = Task::create($formatted);
        return response(json_encode($task), 200);
    }
}