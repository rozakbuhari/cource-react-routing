import React from 'react'
import { Switch, Route } from 'react-router-dom';

const WorkspaceDetailPage = () => {
    return (
        <div>
            <Switch>
                <Route path="/workspace/:id/property">
                    Workspace Properties
                </Route>
                <Route path="/workspace/:id">
                    Empty Page
                </Route>
            </Switch>
        </div>
    )
}

export default WorkspaceDetailPage
