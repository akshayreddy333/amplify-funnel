import { Helmet } from "react-helmet"

function ProdTest() {

    return (
        <div>
            <p>This is Prod</p>
            <div id="Prod-container" />
            <Helmet>
                <script
                    id="indeed-partnership-funnel-script"
                    type="text/javascript"
                    src="https://partnerships.indeed.com/static/scout-file/scout.js"
                    data-indeed-container-id="Prod-container"
                    data-indeed-partner-name="Indeed">
                </script>
            </Helmet>
        </div>
    );
}

export default ProdTest;