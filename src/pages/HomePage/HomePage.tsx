import { Button } from "../../components/Button/Button";

export function HomePage() {
    return (
        <div className="flex flex-column w-screen h-screen items-center justify-center">
            <div className="gap-4 flex flex-row">
                <Button type="p" onClick={null}>primary</Button>
                <Button type="s" onClick={null}>secondary</Button>
                <Button type="t" onClick={null}>tertiary</Button>
            </div>

        </div>
    )
}