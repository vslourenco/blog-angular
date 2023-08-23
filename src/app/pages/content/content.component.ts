import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string =
    'https://img.freepik.com/free-photo/digital-cloud-data-storage-digital-concept-cloudscape-digital-online-service-global-network-database-backup-computer-infrastructure-technology-solution_90220-1046.jpg?w=740&t=st=1692549781~exp=1692550381~hmac=c504662a7cc2d5dd4b64e754cf9b5343a92a904adc06a2a346b51c9688fb7389';
  contentTitle: string = 'What is Lorem Ipsum?';
  contentDescription: string = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with the release
  of Letraset sheets containing Lorem Ipsum passages, and more recently
  with desktop publishing software like Aldus PageMaker including versions
  of Lorem Ipsum.`;
}
