import { Component, OnInit, ViewChild } from '@angular/core';
import { SetorService } from 'src/app/modules/setor/setor.service';
import { Setor } from 'src/app/modules/setor/setor';
import * as setorFactory from 'src/app/modules/setor/setor.factory';
import { Subsetor } from 'src/app/modules/subsetor/subsetor';
import * as subsetorFactory from 'src/app/modules/subsetor/subsetor.factory';
import { Segmento } from 'src/app/modules/segmento/segmento';
import * as segmentoFactory from 'src/app/modules/segmento/segmento.factory';
import { MatSelect } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-empresa-select-setorial',
  templateUrl: './empresa-select-setorial.component.html',
  styleUrls: ['./empresa-select-setorial.component.scss']
})
export class EmpresaSelectSetorialComponent implements OnInit {

    protected setores:Setor[];
    private subsetores:Subsetor[];
    private segmentos:Segmento[];

    private setoresOptions:Setor[];
    private subsetoresOptions:Subsetor[];
    private segmentosOptions:Segmento[];

    private setorSelected:Setor;
    private subsetorSelected:Subsetor;
    private segmentoSelected:Segmento;

    @ViewChild('selectSetor') filter_setor:MatSelect;
    @ViewChild('selectSubsetor') filter_subsetor:MatSelect;
    @ViewChild('selectSegmento') filter_segmento:MatSelect;

    private callComponentSelectSetorial = new Subject<any>();
    public  callComponentSelectSetorial$ = this.callComponentSelectSetorial.asObservable();

    constructor(protected setorService: SetorService) 
    { 
        this.setores = [];
        this.subsetores = [];
        this.segmentos = [];
    }

    ngOnInit() 
    {
        this.setorService.orderBy('nome').with('subsetores-segmentos').noLimit().list((response) => {

            response.data.list.forEach(element => {

                let setor = setorFactory.create();
                setor.id = element.id;
                setor.nome = element.nome;
                
                this.setores.push(setor);

                element.subsetores.forEach(element => {
                    let subsetor = subsetorFactory.create();
                    subsetor.id = element.id;
                    subsetor.nome = element.nome;
                    subsetor.setor_id = element.setor_id;

                    this.subsetores.push(subsetor);

                    element.segmentos.forEach(element => {
                        let segmento = segmentoFactory.create();
                        segmento.id = element.id;
                        segmento.nome = element.nome;
                        segmento.subsetor_id = element.subsetor_id;
    
                        this.segmentos.push(segmento);
                    });
                });
            });

        }, (error) => {
            console.log(error);
        });

        this.setoresOptions = this.setores;
        this.subsetoresOptions = this.subsetores;
        this.segmentosOptions = this.segmentos;
    }

    public clean() 
    {
        this.setorSelected = null;
        this.subsetorSelected = null;
        this.segmentoSelected = null;

        this.filter_setor.value = '';
        this.filter_subsetor.value = '';
        this.filter_segmento.value = '';

        this.setoresOptions = this.setores;
        this.subsetoresOptions = this.subsetores;
        this.segmentosOptions = this.segmentos;
    }

    private getSetor(setor_id: number): Setor
    {
        let setor: Setor;

        this.setores.forEach(setor_ => {
            if (setor_.id == setor_id)
                setor = setor_;
        });

        return setor;
    }

    private getSubsetor(subsetor_id: number): Subsetor
    {
        let subsetor: Subsetor;

        this.subsetores.forEach(subsetor_ => {
            if (subsetor_.id == subsetor_id)
                subsetor = subsetor_;
        });

        return subsetor;
    }

    private getSegmento(segmento_id: number): Segmento
    {
        let segmento;

        this.segmentos.forEach(segmento_ => {
            if (segmento_.id == segmento_id)
                segmento = segmento_;
        });

        return segmento;
    }

    changeSetor(event)
    {
        const setor_id = event.value;

        this.setorSelected = this.getSetor(setor_id);

        this.subsetoresOptions = [];
        this.segmentosOptions = [];

        this.subsetores.forEach(subsetor => {
            if (subsetor.setor_id == setor_id) {
                this.subsetoresOptions.push(subsetor);
                this.segmentos.forEach(segmento => {
                    if (segmento.subsetor_id == subsetor.id) {
                        this.segmentosOptions.push(segmento);
                    }
                });
            }
        });

        this.callComponentSelectSetorial.next(this.setorSelected);
    }

    changeSubsetor(event)
    {
        const subsetor_id = event.value;

        this.subsetorSelected = this.getSubsetor(subsetor_id);

        this.segmentosOptions = [];

        this.segmentos.forEach(segmento => {
            if (segmento.subsetor_id == subsetor_id)
                this.segmentosOptions.push(segmento);
        });

        if (!this.setorSelected || this.setorSelected.id != this.subsetorSelected.setor_id) {
            this.setorSelected = this.getSetor(this.subsetorSelected.setor_id);
            this.filter_setor.value = this.subsetorSelected.setor_id;
        }

        this.callComponentSelectSetorial.next(this.subsetorSelected);
    }

    changeSegmento(event)
    {
        const segmento_id = event.value;

        this.segmentoSelected = this.getSegmento(segmento_id);

        if (!this.subsetorSelected || this.subsetorSelected.id != this.segmentoSelected.subsetor_id) {
            this.subsetorSelected = this.getSubsetor(this.segmentoSelected.subsetor_id);
            this.filter_subsetor.value = this.segmentoSelected.subsetor_id;
        }

        if (!this.setorSelected || this.setorSelected.id != this.subsetorSelected.setor_id) {
            this.setorSelected = this.getSetor(this.subsetorSelected.setor_id);
            this.filter_setor.value = this.subsetorSelected.setor_id;
        }

        this.callComponentSelectSetorial.next(this.segmentoSelected);
    }  
}
