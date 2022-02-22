import { Helmet } from "react-helmet"

function QaTest() {

    return (
        <div>
            <p>This is QA</p>
            <div id="QA-container" />
            <Helmet>
                <script
                    id="indeed-partnership-funnel-script"
                    type="text/javascript"
                    src="https://partnership-funnel.sandbox.qa.indeed.net/static/scout-file/scout.js"
                    data-indeed-container-id="QA-container"
                    data-indeed-partner-name="Indeed">
                </script>
            </Helmet>
        </div>
    );
}

export default QaTest;