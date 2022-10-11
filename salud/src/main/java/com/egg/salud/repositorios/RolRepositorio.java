/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.egg.salud.repositorios;

import com.egg.salud.entidades.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 * @author santi
 */
@Repository
public interface RolRepositorio extends JpaRepository <Rol, Long>{

    public Optional<Rol> findByNombre(String nombre);


}
