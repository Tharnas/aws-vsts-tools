/*
  * Copyright 2017 Amazon.com, Inc. and its affiliates. All Rights Reserved.
  *
  * Licensed under the MIT License. See the LICENSE accompanying this file
  * for the specific language governing permissions and limitations under
  * the License.
  */

import tl = require('vsts-task-lib/task');

export class DeleteStackTaskParameters {
    public awsKeyId: string;
    public awsSecretKey: string;
    public stackName: string;
    public awsRegion: string;

    constructor() {
        try {
            const awsEndpoint = tl.getInput('awsCredentials', true);
            const awsEndpointAuth = tl.getEndpointAuthorization(awsEndpoint, false);
            this.awsKeyId = awsEndpointAuth.parameters.username;
            this.awsSecretKey = awsEndpointAuth.parameters.password;
            this.stackName = tl.getInput('stackName', true);
            this.awsRegion = tl.getInput('regionName', true);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
