import React, { useState } from "react";

export default function FormularioTI() {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");

  const subcategorias = {
    Hardware: ["PC", "Servidor", "Impresora", "Periférico"],
    Software: ["Licencias", "Desarrollo", "Actualización"],
    Infraestructura: ["Red", "Backups", "Servidores", "VMs"],
    "Cuentas y accesos": ["Usuarios", "Permisos", "Contraseñas"],
    "Seguridad informática": ["Antivirus", "Vulnerabilidades"],
    Telecomunicaciones: ["Telefonía", "Videollamadas"],
    "Capacitación TI": ["Entrenamientos", "Guías", "Cursos"],
    "Gestión documental": ["Repositorios", "Digitalización"],
    "Proyectos especiales": ["Soluciones", "Automatizaciones"]
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Logo ESAP */}
      <div className="flex justify-center mb-6">
        <img
          src="https://www.esap.edu.co/portal/wp-content/uploads/2019/09/logo_esap_blanco.png"
          alt="Logo ESAP"
          className="h-20"
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-4">
        Formulario de Solicitudes TI
      </h1>

      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Solicitud enviada correctamente ✅");
        }}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            required
            placeholder="Nombre completo"
            className="p-2 border rounded"
          />
          <input
            type="text"
            required
            placeholder="Cargo"
            className="p-2 border rounded"
          />
          <input
            type="text"
            required
            placeholder="Área o dependencia"
            className="p-2 border rounded"
          />
          <input
            type="email"
            required
            placeholder="Correo institucional"
            className="p-2 border rounded"
          />
          <input
            type="tel"
            required
            placeholder="Teléfono de contacto"
            className="p-2 border rounded"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Categoría */}
          <select
            required
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
              setSubcategoria("");
            }}
            className="p-2 border rounded"
          >
            <option value="">Seleccione categoría</option>
            {Object.keys(subcategorias).map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Subcategoría */}
          {categoria && (
            <select
              required
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Seleccione subcategoría</option>
              {subcategorias[categoria].map((sub) => (
                <option key={sub}>{sub}</option>
              ))}
            </select>
          )}
        </div>

        <textarea
          required
          placeholder="Descripción clara y específica de la necesidad"
          className="p-2 border rounded"
          rows={3}
        />
        <textarea
          required
          placeholder="Justificación de la solicitud (impacto o beneficio)"
          className="p-2 border rounded"
          rows={3}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <select required className="p-2 border rounded">
            <option value="">Nivel de urgencia</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
          <input
            type="date"
            required
            className="p-2 border rounded"
            placeholder="Fecha requerida"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Cargar archivo adjunto</label>
          <input
            type="file"
            accept=".pdf,.jpg,.png,.xlsx,.docx"
            className="p-2 border rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
        >
          Enviar solicitud
        </button>
      </form>
    </div>
  );
}