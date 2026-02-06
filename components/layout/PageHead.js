import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
            {/* <link rel="icon" href="/public/" /> */}
                <title>
                    {headTitle ? headTitle : "EcesisTech"}
                </title>
            </Head>
        </>
    )
}

export default PageHead