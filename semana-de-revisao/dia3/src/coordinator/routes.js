import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Router = () => {
    <Router>
        <Switch>
            <Route path='/tarefas' component={taskList} />
            <Route path='/tarefas/adicionar-tarefa' component={taskAdd} />
            <Route path='/tarefas/:id' component={taskUpdate} />
        </Switch>
    </Router>
}