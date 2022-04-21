import { Octokit } from "@octokit/rest";

const GITHUB_USER_TOKEN = `${process.env['REACT_APP_GITHUB_USER_TOKEN']}`;
const octokit = new Octokit({ auth: GITHUB_USER_TOKEN });

export const fetchIssues = async (owner, repository, issueState = 'open') => {
    const issues = await octokit.request(`GET /repos/${owner}/${repository}/issues`, { state: issueState });
    return issues.data;
}