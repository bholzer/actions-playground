const core = require('@actions/core');

const run = async () => {
  try {
  	const paramValue = "HELLOWORLD"
  	core.setSecret(paramValue);
  	core.exportVariable("EXPORTEDVAR", paramValue);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();