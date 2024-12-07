// const AutomaticVisualEditing = dynamic(() =>
//     import("@/components/automatic-visual-editing").then(
//         (mod) => mod.AutomaticVisualEditing
//     )
// );

// export async function generateMetadata(
//     {
//         params,
//     }: {
//         params: QueryParams;
//     },
//     parent: ResolvingMetadata
// ): Promise<Metadata | ResolvedMetadata> {
//     const { data } = await loadSettings();
//     const seo = data?.seo;
//     const slug = params?.slug;

//     return await makeMetadata({ seo, parent, slug });
// }

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
