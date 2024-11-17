
const MarketingLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">

            <main className="h-full pt-16">
                {children}
            </main>
        </div>
    );
}

export default MarketingLayout;