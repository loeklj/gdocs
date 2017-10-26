'use strict';

import nodegit from 'nodegit';
import fs from 'fs';
import child_process from 'child_process';



function create(req, res){
  console.log('create method');
}

function get(req, res){

  console.log('get method');
}

function edit(req, res){
  console.log('edit method');

}

export default {
  create,
  get,
  edit
};
