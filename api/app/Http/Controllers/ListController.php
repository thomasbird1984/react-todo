<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Models\ListItem;
use App\Http\Models\Task;

class ListController extends Controller {

    public function lists_list() {
        $lists = ListItem::all();
        return response(json_encode($lists), 200);
    }

    public function list_single($id) {
        $list = ListItem::find($id);
        return response(json_encode($list), 200);
    }

    public function list_tasks($list_id, $status = false) {
        $status = $status ? $status : 'new';
        $tasks = Task::whereRaw('list_id = ? AND status = ?', [$list_id, $status])->get();
        return response($tasks, 200);
    }
}