import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'componentName'
})
export class ComponentNamePipe implements PipeTransform {
    private suffixRegex = /([Aa]pi|[Cc]omponent|[Dd]ialog|[Dd]irective|[Ff]orm|[Mm]odule|[Pp]ipe|[Rr]oute|[Ss]ervice)\b/g;
    private splitRegex = /($[a-z])|[A-Z][^A-Z]+/g;

    private split = (name: string) =>
        name.match(this.splitRegex)
            .join(' ');

    transform(name: string) {
        return this.split(
            name.replace(this.suffixRegex, '')
        );
    }
}
