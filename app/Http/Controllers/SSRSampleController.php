<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SSRSampleController extends Controller {
    public function getData() {
      $data = ['test'=>'hello world'];
  
      return view('ssrSample', [
        'packages' => $this->getPackages(),
      ]);
    }
    private function getPackages(): array
    {
      $path = public_path('packages.json');
      $contents = file_get_contents($path);
      return json_decode($contents, true);
    }
  }