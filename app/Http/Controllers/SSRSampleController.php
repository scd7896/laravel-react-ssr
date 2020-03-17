<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SSRSampleController extends Controller {
    public function getData() {
      $data = [
        'test'=>'hello world',
        "kimserver"=>"taekyung"
      ];
      
      return view('ssrSample', [
        'packages' => $data,
      ]);
    }
    private function getPackages(): array
    {
      $path = public_path('packages.json');
      $contents = file_get_contents($path);
      return json_decode($contents, true);
    }
  }