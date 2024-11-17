"use client"

const MainLayout = ({ children }: {
    children: React.ReactNode
}) => {

    return (
        <div className="h-full flex  ">

            <main className="h-full flex-1  overflow-y-auto">

                {children}
            </main>
        </div>
    );
}

export default MainLayout;